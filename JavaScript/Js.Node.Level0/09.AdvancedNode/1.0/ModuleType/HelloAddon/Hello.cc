#include <node.h>

namespace example {

using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::String;
using v8::Value;

void Method(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();
  args.GetReturnValue().Set(String::NewFromUtf8(isolate, "Prajit Gandhi."));
}

void init(Local<Object> exports) {
  NODE_SET_METHOD(exports, "author", Method);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, init)

} 