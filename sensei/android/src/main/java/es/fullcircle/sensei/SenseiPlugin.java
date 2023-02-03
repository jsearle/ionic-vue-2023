package es.fullcircle.sensei;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "Sensei")
public class SenseiPlugin extends Plugin {

    private Sensei implementation = new Sensei();

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }


    @PluginMethod
    public void initSensors(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("result", implementation.initSensors( getContext() ));
        call.resolve(ret);
    }


    @PluginMethod
    public void getLight(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("value", implementation.getLight());
        call.resolve(ret);
    }


    @PluginMethod
    public void getPressure(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("value", implementation.getPressure());
        call.resolve(ret);
    }
}
