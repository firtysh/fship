package config

import (
	"log"
	"os"
	"github.com/joho/godotenv"
)

type Config struct {
	PORT         string
	MONGO_DB_URL string
}

var App Config

func init() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	App = Config{
		PORT:         os.Getenv("PORT"),
		MONGO_DB_URL: os.Getenv("MONGO_DB_URL"),
	}

}

// get the config
func GetConfig() Config {
	return App
}




