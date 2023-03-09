package main

import (
	"fship-server/config"
	"fship-server/database"
	"log"
	"net/http"
	"text/template"
	"time"

	"github.com/gorilla/mux"
)

func main() {

	c:= config.GetConfig()
	log.Println(c.PORT + "accessed the server @ http://localhost:" + c.PORT )

	database.Connect()

	//router code

	router := mux.NewRouter()

	srv:= &http.Server{
		Handler: router,
		Addr: "127.0.0.1:"+c.PORT,
		WriteTimeout: 15 * time.Second,
		ReadTimeout: 15 * time.Second,
	}

	
	router.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Server is running on port: " + c.PORT))
	})

	router.HandleFunc("/test", func(w http.ResponseWriter, r *http.Request) {
		data:= struct {
			Name string
			Age int
		}{
			Name: "avijit",
			Age: 20,
		}
		tmpl , err := template.ParseFiles("apidoc/index.html")
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
		err= tmpl.Execute(w, data)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}

	})
	log.Fatal(srv.ListenAndServe())

}

