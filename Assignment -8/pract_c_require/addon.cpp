#include <node.h>

// Function that will be called when the addon is required
void MyFunction(const v8::FunctionCallbackInfo<v8::Value>& args) {
  // Create a new scope
  v8::Isolate* isolate = args.GetIsolate();
  v8::HandleScope scope(isolate);

  // Return a string as the result
  v8::Local<v8::String> result = v8::String::NewFromUtf8(isolate, "Hello from C++");

  // Set the return value
  args.GetReturnValue().Set(result);
}

// Called when the module is initialized
void Initialize(v8::Local<v8::Object> exports) {
  // Register the MyFunction as a method on the exports object
  NODE_SET_METHOD(exports, "myFunction", MyFunction);
}

// Define the addon initialization function
NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)

