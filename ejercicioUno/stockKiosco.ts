interface Inventario {
  cargarProducto(producto: Producto): void;
  eliminarProducto(codigo: string): void;
  mostrarInventario(): void;
  venderProducto(codigo: string, cantidad: number): void;
  mostrarVentas(): void;  
}

class Producto {
  private nombre: string;
  private precio: number;
  private stock: number;
  private codigo: string;

  constructor(nombre: string, precio: number, stock: number, codigo: string) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.codigo = codigo;
  }

  getNombre() {
    return this.nombre
  }

  getPrecio() {
    return this.precio
  }

  getStock() {
    return this.stock
  }

  reducirStock(cantidad: number) {
    this.stock -= cantidad;
  }

  getCodigo() {
    return this.codigo
  }
}

class Kiosco implements Inventario {
  private productosDisponibles: Producto[] = [];
  private productosVendidos: {producto: Producto; cantidad: number}[] = [];

  cargarProducto(producto: Producto): void {
    this.productosDisponibles.push(producto);
  }

  eliminarProducto(codigo: string) {
    let productoEncontrado: number = -1;

    for (let i = 0; i < this.productosDisponibles.length; i++) {
      if (this.productosDisponibles[i].getCodigo() === codigo) {
        productoEncontrado = i;
        break 
      }
    }

    if (productoEncontrado !== -1) {
      const productoEliminado = this.productosDisponibles.splice(productoEncontrado, 1)[0];
      console.log("*********");
      console.log(`Producto ${productoEliminado.getNombre()} (${codigo}) eliminado con exito del inventario.`);
      console.log("");
    } else {
      console.log("*********");
      console.log(`Codigo (${codigo}) no encontrado, ingrese un codigo valido`)
      console.log("");
    }
  }

  mostrarInventario(): void {
    console.log("");
    console.log("*********");
    console.log("Tenemos en stock:");
    console.log("");
    this.productosDisponibles.forEach(producto => {
      console.log(`Codigo: ${producto.getCodigo()}, Producto: ${producto.getNombre()}, Precio: ${producto.getPrecio()}, Cantidad: ${producto.getStock()}`);
      console.log("");  
    });
    console.log("");
  }

  venderProducto(codigo: string, cantidad: number) {
    let producto;

    for (const productoEncontrado of this.productosDisponibles) {
      if (productoEncontrado.getCodigo() === codigo) {
        producto = productoEncontrado;
        break;
      }      
    }

    if (producto) {
      if (producto.getStock() >= cantidad) {
        producto.reducirStock(cantidad);

        this.productosVendidos.push({producto, cantidad});
        console.log("*********");
        console.log(`Venta con exito:`);
        console.log(`${producto.getNombre()}: ${cantidad} * $${producto.getPrecio()} = $${cantidad * producto.getPrecio()}`);
        console.log("");
      } else {
        console.log("*********");
        console.log(`No tenemos suficiente stock, stock disponible: ${producto.getStock()}`);
        console.log("");
      }
    } else {
      console.log("*********");
      console.log(`Codigo (${codigo}) no encontrado`);
      console.log("");
    }
  }

  mostrarVentas(): void {
    console.log("*********");
    console.log("Ventas:");
    this.productosVendidos.forEach(({producto, cantidad}) => {
      console.log(`Producto: ${producto.getNombre()}, Cantidad vendida: ${cantidad}`);      
    });
    console.log("*********");
  }

  cargarDesdeArreglo() {
    
  }
}

// Creo algunos productos
const leche1 = new Producto("Leche", 500, 15, "001");
const manteca1 = new Producto("Manteca", 400, 8, "002");
const panLactal = new Producto("Pan Lactal", 750, 25, "003");

// Creo el kiosko
const kiosco = new Kiosco();

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
kiosco.venderProducto("001", 3)
kiosco.venderProducto("024", 3) //codigo no existe
kiosco.venderProducto("001", 300) //stock insuficiente

// Muestro inventario nuevamente
kiosco.mostrarInventario();

// Hago mas ventas y las muestro
kiosco.venderProducto("001", 3);
kiosco.venderProducto("003", 2);
kiosco.venderProducto("001", 2);
kiosco.mostrarVentas()