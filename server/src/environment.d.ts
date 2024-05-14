declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production';
            PORT?: string;
        }
    }
}

// convert file into a module by adding an empty export statement.
export {};
