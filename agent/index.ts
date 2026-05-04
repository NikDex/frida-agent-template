import Java from "frida-java-bridge";
import { log } from "./logger.js";

if (Java.available) {
    Java.perform(() => {
        
    });
} else {
    log("No Java VM in this process");
}
