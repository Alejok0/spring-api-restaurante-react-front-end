package itch.alejo.restaurante.entitty;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "menu_productos")
public class MenuProducto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_menu_producto;

    @ManyToOne
    @JoinColumn(name = "id_menu")
    private Menu menu;

    @ManyToOne
    @JoinColumn(name = "id_producto")
    private Producto producto;

    private int cantidad;
}