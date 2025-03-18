package itch.alejo.restaurante.repository;

import itch.alejo.restaurante.entitty.Menu;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MenuRepository extends JpaRepository<Menu, Long> {
}