import app from "./app";
import { Config } from "./config";

(() => {
    const PORT = Config.PORT;
    try {
        app.listen(PORT, () => {
            // eslint-disable-next-line no-console
            console.log(`Server is listening on port ${PORT}`);
        });
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log("Error in server-listen", error);
        process.exit(1);
    }
})();
