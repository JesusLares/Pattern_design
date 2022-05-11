## Observer

Strategy es un patrón de diseño de comportamiento, ya que te proporciona una ayuda a poder tener comportamientos distintos en un objeto y poder agregarle nuevos comportamientos sin tener que modificar el contexto inicial.

![strategy](../img/Observer.png)
Se centra en tener un contexto (una clase contexto), la cual tenga una estrategia y una acción. La estrategia se le asigna de alguna de las clases que se tienen por debajo

Sirve cuando se tienen comportamientos que van a cambiar en un objeto en tiempo de ejecucción. 

Se encuentra de una forma muy común en el frontend (cuando se tiene mucho if o switch) como podría ser en calculos de venta, etc.