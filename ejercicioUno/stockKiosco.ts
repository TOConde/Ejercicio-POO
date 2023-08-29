interface Inventario {
  cargarProducto(producto: Producto): void;
  eliminarProducto(): void;
  mostrarInventario(): void;
  venderProducto(): void;
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

  eliminarProducto(): void {
    
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

  venderProducto(): void {
    
  }

  mostrarVentas(): void {
    
  }

}

// Creo algunos productos
const leche1 = new Producto("Leche", 500, 15, "001");
const manteca1 = new Producto("Manteca", 400, 8, "002");
const panLactal = new Producto("Pan Lactal", 750, 25, "003");

// Creo el kiosko
const kiosko = new Kiosco();

// Cargo los productos en el kiosko
kiosko.cargarProducto(leche1);
kiosko.cargarProducto(manteca1);
kiosko.cargarProducto(panLactal);

// Muestro inventario
kiosko.mostrarInventario();
