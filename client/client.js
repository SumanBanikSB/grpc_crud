const PROTO_PATH = "../customers.proto";

// var grpc = require("grpc");
// var protoLoader = require("@grpc/proto-loader");

const grpc = require("../grpc-node/package/grpc-js");
const protoLoader = require("../grpc-node/package/proto-loader");

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
	keepCase: true,
	longs: String,
	enums: String,
	arrays: true
});

const CustomerService = grpc.loadPackageDefinition(packageDefinition).CustomerService;
const client = new CustomerService(
	"localhost:30043",
	grpc.credentials.createInsecure()
);

module.exports = client;
