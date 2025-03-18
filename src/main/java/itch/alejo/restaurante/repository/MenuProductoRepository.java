package itch.alejo.restaurante.repository;

import itch.alejo.restaurante.entitty.MenuProducto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MenuProductoRepository extends JpaRepository<MenuProducto, Long> {
}