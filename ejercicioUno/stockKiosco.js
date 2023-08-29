var Producto = /** @class */ (function () {
    function Producto(nombre, precio, stock, codigo) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.codigo = codigo;
    }
    Producto.prototype.getNombre = function () {
        return this.nombre;
    };
    Producto.prototype.getPrecio = function () {
        return this.precio;
    };
    Producto.prototype.getStock = function () {
        return this.stock;
    };
    Producto.prototype.getCodigo = function () {
        return this.codigo;
    };
    return Producto;
}());
var Kiosco = /** @class */ (function () {
    function Kiosco() {
        this.productosDisponibles = [];
        this.productosVendidos = [];
    }
    Kiosco.prototype.cargarProducto = function (producto) {
        this.productosDisponibles.push(producto);
    };
    Kiosco.prototype.eliminarProducto = function (codigo) {
        var productoEncontrado = -1;
        for (var i = 0; i < this.productosDisponibles.length; i++) {
            if (this.productosDisponibles[i].getCodigo() === codigo) {
                productoEncontrado = i;
                break;
            }
        }
        if (productoEncontrado !== -1) {
            var productoEliminado = this.productosDisponibles.splice(productoEncontrado, 1)[0];
            console.log("");
            console.log("Producto ".concat(productoEliminado.getNombre(), " (").concat(codigo, ") eliminado con exito del inventario."));
            console.log("");
        }
        else {
            console.log("");
            console.log("Codigo (".concat(codigo, ") no encontrado, ingrese un codigo valido"));
            console.log("");
        }
    };
    Kiosco.prototype.mostrarInventario = function () {
        console.log("");
        console.log("*********");
        console.log("Tenemos en stock:");
        console.log("");
        this.productosDisponibles.forEach(function (producto) {
            console.log("Codigo: ".concat(producto.getCodigo(), ", Producto: ").concat(producto.getNombre(), ", Precio: ").concat(producto.getPrecio(), ", Cantidad: ").concat(producto.getStock()));
            console.log("");
        });
        console.log("");
    };
    Kiosco.prototype.venderProducto = function () {
    };
    Kiosco.prototype.mostrarVentas = function () {
    };
    return Kiosco;
}());
// Creo algunos productos
var leche1 = new Producto("Leche", 500, 15, "001");
var manteca1 = new Producto("Manteca", 400, 8, "002");
var panLactal = new Producto("Pan Lactal", 750, 25, "003");
// Creo el kiosko
var kiosko = new Kiosco();
// Cargo los productos en el kiosko
kiosko.cargarProducto(leche1);
kiosko.cargarProducto(manteca1);
kiosko.cargarProducto(panLactal);
// Muestro inventario
kiosko.mostrarInventario();
// Elimino un producto y vuelvo a mostrar inventario
kiosko.eliminarProducto("002");
kiosko.mostrarInventario();
