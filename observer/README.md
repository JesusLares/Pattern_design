## Observer

Observer es un patrón de diseño de comportamiento, ya que te proporciona una ayuda a poder tener comportamientos distintos en un objeto y poder agregarle nuevos comportamientos sin tener que modificar el contexto inicial.

![observer](../img/Observer.png)
Este patrón cuenta con un sujeto (subject) y un observador (observer), el sujeto tiene observadores los cuales se enteran cuando el sujeto cambie su estado (propiedades que pueden cambiar de valor)
Se centra en tener un contexto (una clase contexto), la cual tenga una estrategia y una acción. La estrategia se le asigna de alguna de las clases que se tienen por debajo

Sirve cuando se tienen comportamientos que van a cambiar en un objeto en tiempo de ejecucción. 

Se encuentra de una forma muy común en el frontend (cuando se tiene mucho if o switch) como podría ser en calculos de venta, etc.