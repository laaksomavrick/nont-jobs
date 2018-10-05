import convict from 'convict';

export const config = convict({
    port: {
        doc: 'The port the server binds',
        format: 'port',
        default: 3000,
        env: 'PORT'
    }
});
