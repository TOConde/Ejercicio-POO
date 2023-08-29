interface Inventario {
  mostrarInventario(): void;
  mostrarVentas(): void;
  cargarProducto(): void;
  eliminarProducto(): void;
  venderProducto(): void;
}

class Producto {
  private nombre: string;
  private precio: number;
  private stock: number;

  constructor(nombre: string, precio: number, stock: number) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock
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
}

class Kiosco implements Inventario {
  
}