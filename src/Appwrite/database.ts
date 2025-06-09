import { Client, Databases } from "appwrite";
import config from "../config/config";

const client = new Client()
  .setEndpoint(config.appwriteurl)
  .setProject(config.appwriteproject);

export const databases = new Databases(client);