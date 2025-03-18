package itch.alejo.restaurante.repository;

import itch.alejo.restaurante.entitty.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductoRepository extends JpaRepository<Producto, Long> {
}