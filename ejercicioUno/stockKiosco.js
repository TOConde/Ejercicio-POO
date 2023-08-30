var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
    Producto.prototype.reducirStock = function (cantidad) {
        this.stock -= cantidad;
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
            console.log("*********");
            console.log("Producto ".concat(productoEliminado.getNombre(), " (").concat(codigo, ") eliminado con exito del inventario."));
            console.log("");
        }
        else {
            console.log("*********");
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
    Kiosco.prototype.venderProducto = function (codigo, cantidad) {
        var producto;
        for (var _i = 0, _a = this.productosDisponibles; _i < _a.length; _i++) {
            var productoEncontrado = _a[_i];
            if (productoEncontrado.getCodigo() === codigo) {
                producto = productoEncontrado;
                break;
            }
        }
        if (producto) {
            if (producto.getStock() >= cantidad) {
                producto.reducirStock(cantidad);
                this.productosVendidos.push({ producto: producto, cantidad: cantidad });
                console.log("*********");
                console.log("Venta con exito:");
                console.log("".concat(producto.getNombre(), ": ").concat(cantidad, " * $").concat(producto.getPrecio(), " = $").concat(cantidad * producto.getPrecio()));
                console.log("");
            }
            else {
                console.log("*********");
                console.log("No tenemos suficiente stock, stock disponible: ".concat(producto.getStock()));
                console.log("");
            }
        }
        else {
            console.log("*********");
            console.log("Codigo (".concat(codigo, ") no encontrado"));
            console.log("");
        }
    };
    Kiosco.prototype.mostrarVentas = function () {
        console.log("*********");
        console.log("Ventas:");
        this.productosVendidos.forEach(function (_a) {
            var producto = _a.producto, cantidad = _a.cantidad;
            console.log("Producto: ".concat(producto.getNombre(), ", Cantidad vendida: ").concat(cantidad));
        });
        console.log("*********");
    };
    Kiosco.prototype.cargarDesdeArreglo = function (productos) {
        this.productosDisponibles = __spreadArray(__spreadArray([], this.productosDisponibles, true), productos, true);
    };
    return Kiosco;
}());
// Creo algunos productos
var leche1 = new Producto("Leche", 500, 15, "001");
var manteca1 = new Producto("Manteca", 400, 8, "002");
var panLactal = new Producto("Pan Lactal", 750, 25, "003");
// Creo el kiosko
var kiosco = new Kiosco();
// Cargo los productos en el kiosko
kiosco.cargarProducto(leche1);
kiosco.cargarProducto(manteca1);
kiosco.cargarProducto(panLactal);
// Muestro inventario
kiosco.mostrarInventario();
// Elimino un producto y vuelvo a mostrar inventario
kiosco.eliminarProducto("002");
kiosco.mostrarInventario();
// Hago ventas, una correcta y otras provocando errores
kiosco.venderProducto("001", 3);
kiosco.venderProducto("024", 3); //codigo no existe
kiosco.venderProducto("001", 300); //stock insuficiente
// Muestro inventario nuevamente
kiosco.mostrarInventario();
// Hago mas ventas y las muestro
kiosco.venderProducto("001", 3);
kiosco.venderProducto("003", 2);
kiosco.venderProducto("001", 2);
kiosco.mostrarVentas();
console.log("");
console.log("");
console.log("");
console.log("cosas nuevas");
console.log("");
console.log("");
console.log("");
// Agrego un arreglo y lo cargo, luego muestro el inventario
var arregloDeProductos = [
    new Producto("Chocolate", 1250, 60, "004"),
    new Producto("Coca Cola", 850, 15, "005")
];
kiosco.cargarDesdeArreglo(arregloDeProductos);
kiosco.mostrarInventario();
