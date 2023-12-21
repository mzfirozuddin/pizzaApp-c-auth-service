import app from "./app";
import { Config } from "./config";
import logger from "./config/logger";

(() => {
    const PORT = Config.PORT;
    try {
        app.listen(PORT, () => {
            logger.info(`Server is listening on port ${PORT}`);
        });
    } catch (error) {
        if (error instanceof Error) {
            logger.error(error.message);

            setTimeout(() => {
                process.exit(1);
            }, 1000);
        }
    }
})();
