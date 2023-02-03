package es.fullcircle.sensei;

import android.content.Context;
import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import android.util.Log;

public class Sensei implements SensorEventListener {

    private SensorManager sensorManager;
    private Sensor pressure;
    private Sensor light;

    private float millibarsOfPressure;
    private float lux;

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }


    public String initSensors(Context context){
        Log.i("Init", "started");
        sensorManager = (SensorManager) context.getSystemService(Context.SENSOR_SERVICE);
        light = sensorManager.getDefaultSensor(Sensor.TYPE_LIGHT);
        pressure = sensorManager.getDefaultSensor(Sensor.TYPE_PRESSURE);
        sensorManager.registerListener(this, light, SensorManager.SENSOR_DELAY_FASTEST);
        sensorManager.registerListener(this, pressure, SensorManager.SENSOR_DELAY_NORMAL);
        return "ok";
    }

    public float getLight(){
        return lux;
    }

    public float getPressure(){
        return millibarsOfPressure;
    }

    @Override
    public final void onAccuracyChanged(Sensor sensor, int accuracy) {
        // Do something here if sensor accuracy changes.
    }

    @Override
    public final void onSensorChanged(SensorEvent event) {
        //Log.i("changed", String.valueOf( event.values[0] ));
        if (event.sensor.getType() == Sensor.TYPE_PRESSURE) {
            millibarsOfPressure = event.values[0];
        } else {
            lux = event.values[0];
        }
    }
}
