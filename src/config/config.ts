const config = {
    appwriteurl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteproject: String(import.meta.env.VITE_APPWRITE_PROJECT_ID ),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteEarningCollectionId: String(import.meta.env.VITE_APPWRITE_EARNING_COLLECTION_ID),
}

export default config;