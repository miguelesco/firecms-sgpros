import React, { useCallback, useMemo } from "react";

import {
    AppBar,
    Authenticator,
    CircularProgressCenter,
    Drawer,
    FireCMS,
    ModeControllerProvider,
    NavigationRoutes,
    Scaffold,
    SideDialogs,
    SnackbarProvider,
    useBuildLocalConfigurationPersistence,
    useBuildModeController,
    useBuildNavigationController,
    useValidateAuthenticator
} from "@firecms/core";
import {
    FirebaseAuthController,
    FirebaseLoginView,
    FirebaseSignInProvider,
    FirebaseUserWrapper,
    useFirebaseAuthController,
    useFirebaseStorageSource,
    useFirestoreDelegate,
    useInitialiseFirebase,
} from "@firecms/firebase";
import { CenteredView } from "@firecms/ui";
import { locationsCollection } from "./collections/locations";
import { offersCollection } from "./collections/offers";
import { promotionsCollection } from "./collections/promotions";
import { quoteBoxCollection } from "./collections/quoteBox";
import { commercialFaqsCollection } from "./collections/commercialFaqs";

import { firebaseConfig } from "./firebase_config";

function App() {

    // Use your own authentication logic here
    const myAuthenticator: Authenticator<FirebaseUserWrapper> = useCallback(async ({
                                                                                       user,
                                                                                       authController
                                                                                   }) => {

        if (user?.email?.includes("flanders")) {
            // You can throw an error to prevent access
            throw Error("Stupid Flanders!");
        }

        const idTokenResult = await user?.firebaseUser?.getIdTokenResult();
        const userIsAdmin = idTokenResult?.claims.admin || user?.email?.endsWith("@firecms.co");

        console.log("Allowing access to", user);

        // we allow access to every user in this case
        return true;
    }, []);

    const collections = useMemo(() => [
        locationsCollection,
        offersCollection,
        promotionsCollection,
        quoteBoxCollection,
        commercialFaqsCollection
    ], []);

    const {
        firebaseApp,
        firebaseConfigLoading,
        configError
    } = useInitialiseFirebase({
        firebaseConfig
    });

    // Controller used to manage the dark or light color mode
    const modeController = useBuildModeController();

    const signInOptions: FirebaseSignInProvider[] = ["google.com", "password"];

    // Controller for managing authentication
    const authController: FirebaseAuthController = useFirebaseAuthController({
        firebaseApp,
        signInOptions
    });

    // Controller for saving some user preferences locally.
    const userConfigPersistence = useBuildLocalConfigurationPersistence();

    // Delegate used for fetching and saving data in Firestore
    const firestoreDelegate = useFirestoreDelegate({
        firebaseApp
    });

    // Controller used for saving and fetching files in storage
    const storageSource = useFirebaseStorageSource({
        firebaseApp
    });

    const {
        authLoading,
        canAccessMainView,
        notAllowedError
    } = useValidateAuthenticator({
        authController,
        authenticator: myAuthenticator,
        dataSourceDelegate: firestoreDelegate,
        storageSource
    });

    const navigationController = useBuildNavigationController({
        disabled: authLoading,
        collections,
        authController,
        dataSourceDelegate: firestoreDelegate
    });

    if (firebaseConfigLoading || !firebaseApp) {
        return <>
            <CircularProgressCenter/>
        </>;
    }

    if (configError) {
        return <CenteredView>{configError}</CenteredView>;
    }

    return (
        <SnackbarProvider>
            <ModeControllerProvider value={modeController}>
                <FireCMS
                    navigationController={navigationController}
                    authController={authController}
                    userConfigPersistence={userConfigPersistence}
                    dataSourceDelegate={firestoreDelegate}
                    storageSource={storageSource}
                >
                    {({
                          context,
                          loading
                      }) => {

                        if (loading || authLoading) {
                            return <CircularProgressCenter size={"large"}/>;
                        }

                        if (!canAccessMainView) {
                            return <FirebaseLoginView authController={authController}
                                                      firebaseApp={firebaseApp}
                                                      signInOptions={signInOptions}
                                                      notAllowedError={notAllowedError}/>;
                        }

                        return <Scaffold
                            autoOpenDrawer={false}>
                            <AppBar title={"SGPros CMS"}/>
                            <Drawer/>
                            <NavigationRoutes/>
                            <SideDialogs/>
                            {/* Floating Bulk Import Button */}
                            <div style={{
                                position: 'fixed',
                                bottom: '24px',
                                right: '24px',
                                zIndex: 1000
                            }}>
                                <button
                                    onClick={() => {
                                        const importSection = document.getElementById('bulk-import-container');
                                        if (importSection) {
                                            importSection.style.display = importSection.style.display === 'none' ? 'block' : 'none';
                                        } else {
                                            // Create and show bulk import overlay
                                            const overlay = document.createElement('div');
                                            overlay.id = 'bulk-import-overlay';
                                            overlay.style.cssText = `
                                                position: fixed;
                                                top: 0;
                                                left: 0;
                                                width: 100%;
                                                height: 100%;
                                                background: rgba(0,0,0,0.5);
                                                z-index: 2000;
                                                display: flex;
                                                align-items: center;
                                                justify-content: center;
                                            `;
                                            
                                            const content = document.createElement('div');
                                            content.id = 'bulk-import-container';
                                            content.style.cssText = `
                                                background: white;
                                                border-radius: 8px;
                                                max-width: 800px;
                                                width: 90%;
                                                max-height: 90%;
                                                overflow-y: auto;
                                                position: relative;
                                            `;
                                            
                                                                                         content.innerHTML = `
                                                 <div style="padding: 24px; text-align: center;">
                                                     <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                                                         <h2 style="margin: 0; color: #2563eb;">🏢 Bulk Import Locations</h2>
                                                         <button onclick="document.getElementById('bulk-import-overlay').remove()" 
                                                                 style="background: none; border: none; font-size: 24px; cursor: pointer;">×</button>
                                                     </div>
                                                     
                                                     <div style="margin-bottom: 24px;">
                                                         <p style="margin-bottom: 16px; color: #6b7280; font-size: 18px;">
                                                             Import multiple locations from a JSON file
                                                         </p>
                                                         <p style="margin-bottom: 24px; color: #374151;">
                                                             Click the button below to open the dedicated bulk import tool.
                                                         </p>
                                                     </div>
                                                     
                                                     <div style="margin-bottom: 24px;">
                                                         <button onclick="window.open('https://sgpros.web.app/import.html', '_blank')" 
                                                                 style="padding: 12px 24px; background: #2563eb; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 16px; font-weight: 600;">
                                                             🚀 Open Bulk Import Tool
                                                         </button>
                                                     </div>
                                                     
                                                     <div style="background: #f3f4f6; padding: 16px; border-radius: 6px; text-align: left;">
                                                         <p style="margin: 0; font-size: 14px; color: #374151;">
                                                             <strong>💡 Quick Instructions:</strong><br/>
                                                             1. Prepare a JSON file with your location data<br/>
                                                             2. Use the format: [{"slug": "location-name", "title": {...}, "content": {...}, "services_areas": "..."}]<br/>
                                                             3. Upload and import through the dedicated tool<br/>
                                                             4. Return here to manage your imported locations
                                                         </p>
                                                     </div>
                                                 </div>
                                             `;
                                             
                                             overlay.appendChild(content);
                                             document.body.appendChild(overlay);
                                        }
                                    }}
                                    style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '50%',
                                        background: '#2563eb',
                                        color: 'white',
                                        border: 'none',
                                        cursor: 'pointer',
                                        fontSize: '24px',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                    title="Bulk Import Locations"
                                >
                                    📁
                                </button>
                            </div>
                        </Scaffold>;
                    }}
                </FireCMS>
            </ModeControllerProvider>
        </SnackbarProvider>
    );

}

export default App;
