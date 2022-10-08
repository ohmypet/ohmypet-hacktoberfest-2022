## Usage

```sh
mvn install
# mvn install -DskipTests

./mvnw spring-boot:run
```

## Docker

```sh
# build .jar file
mvn clean package
# mvn clean package -DskipTests

docker build -t 103cuong/chichi .
docker run -it -p 8080:8080 103cuong/chichi
```
