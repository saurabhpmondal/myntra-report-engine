import axios from "axios";
import { settings } from "../../config/settings.js";

export async function uploadOrders(rows) {
  try {
    const response = await axios.post(
      settings.google.appsScriptUrl,
      {
        action: "IMPORT_ORDERS",
        rows
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error("Upload failed:", error.message);
    throw error;
  }
}

export async function writeImportLog(log) {
  try {
    const response = await axios.post(
      settings.google.appsScriptUrl,
      {
        action: "IMPORT_LOG",
        log
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error("Import log failed:", error.message);
    throw error;
  }
}

export async function writeSystemLog(log) {
  try {
    const response = await axios.post(
      settings.google.appsScriptUrl,
      {
        action: "SYSTEM_LOG",
        log
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error("System log failed:", error.message);
    throw error;
  }
}