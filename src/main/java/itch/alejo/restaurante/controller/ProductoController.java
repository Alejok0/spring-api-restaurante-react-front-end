package itch.alejo.restaurante.controller;

import itch.alejo.restaurante.dto.ProductoDto;
import itch.alejo.restaurante.service.ProductoService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/restaurante/productos")
@AllArgsConstructor
public class ProductoController {
    private final ProductoService productoService;

    @PostMapping
    public ResponseEntity<ProductoDto> createProducto(@RequestBody ProductoDto productoDto) {
        ProductoDto savedProducto = productoService.createProducto(productoDto);
        return new ResponseEntity<>(savedProducto, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductoDto> getProductoById(@PathVariable Long id) {
        ProductoDto productoDto = productoService.getProductoById(id);
        return ResponseEntity.ok(productoDto);
    }

    @GetMapping
    public ResponseEntity<List<ProductoDto>> getAllProductos() {
        List<ProductoDto> productos = productoService.getAllProductos();
        return ResponseEntity.ok(productos);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProductoDto> updateProducto(@PathVariable Long id, @RequestBody ProductoDto productoDto) {
        ProductoDto updatedProducto = productoService.updateProducto(id, productoDto);
        return ResponseEntity.ok(updatedProducto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProducto(@PathVariable Long id) {
        productoService.deleteProducto(id);
        return ResponseEntity.noContent().build();
    }
}