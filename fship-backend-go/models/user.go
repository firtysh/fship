package models

import (

	// "github.com/google/uuid"
	"go.mongodb.org/mongo-driver/mongo/options"
	"golang.org/x/crypto/bcrypt"
	"gopkg.in/mgo.v2/bson"
)

type User struct {
	ID       bson.ObjectId `json:"id" bson:"_id"`
	Username string        `json:"username" bson:"username"`
	Password string        `json:"password" bson:"password"`
	qustions []struct{
		question string `json:"question" bson:"question"`
		options[] struct{
			option string `json:"option" bson:"option"`
			image	 string `json:"image" bson:"image"`
			isCorrect bool `json:"isCorrect" bson:"isCorrect"`
		} `json:"options" bson:"options"`
	}	`json:"questions" bson:"questions"`
	response []struct{
		Name string `json:"name" bson:"name"`
		Score int `json:"score" bson:"score"`
		bson.MongoTimestamp `json:"timestamp" bson:"timestamp"`
	} `json:"response" bson:"response"`
}

type credentials struct {
	Username string `json:"username" bson:"username"`
	Password string `json:"password" bson:"password"`
}

type UserResponse struct {
	ID       bson.ObjectId `json:"id" bson:"_id"`
	Username string        `json:"username" bson:"username"`
}

func (u *User) HashPassword() error {
	hash, err := bcrypt.GenerateFromPassword([]byte(u.Password), bcrypt.DefaultCost)
	if err != nil {
		return err
	}
	u.Password = string(hash)
	return nil
}

func (u *User) ComparePassword(password string) error {
	incoming := []byte(password)
	existing := []byte(u.Password)
	err:= bcrypt.CompareHashAndPassword(existing, incoming)
	if err != nil {
		return err
	}
	return nil
}

// db-fix
