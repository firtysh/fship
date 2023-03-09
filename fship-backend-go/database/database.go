package database

import (
	"context"
	"fmt"
	"go.mongodb.org/mongo-driver/mongo"
    "go.mongodb.org/mongo-driver/mongo/options"
	"fship-server/config"
)

func Connect() *mongo.Client {
	// Set client options
	clientOptions := options.Client().ApplyURI(config.GetConfig().MONGO_DB_URL)
	// Connect to MongoDB
	client, err := mongo.Connect(context.TODO(), clientOptions)

	if err != nil {
		fmt.Println(err)
	}

	// Check the connection
	err = client.Ping(context.TODO(), nil)

	if err != nil {
		fmt.Println(err)
	}

	fmt.Println("Connected to MongoDB!," + config.GetConfig().MONGO_DB_URL)

	return client
}