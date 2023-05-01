const config={
    env:process.env.NODE_ENV||"development",
    port:process.env.PORT||3001,
    jwtSecret:process.env.JWT_SECRET||"secret key",
    mongoUri:"mongodb+srv://mohamedeltab33y:mohamedeltab33y@cluster0.0q5zh7p.mongodb.net/?retryWrites=true&w=majority"
}
export default config 