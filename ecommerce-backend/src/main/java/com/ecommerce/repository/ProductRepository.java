package com.ecommerce.repository;

import com.ecommerce.entity.Product;
import java.math.BigDecimal;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ProductRepository extends JpaRepository<Product, Long> {
    Page<Product> findByCategoryId(Long categoryId, Pageable pageable);

    Page<Product> findByNameContainingIgnoreCase(String keyword, Pageable pageable);

    @Query("""
        select p from Product p
        where (:keyword is null or lower(p.name) like lower(concat('%', :keyword, '%')))
          and (:categoryId is null or p.category.id = :categoryId)
          and (:minPrice is null or p.price >= :minPrice)
          and (:maxPrice is null or p.price <= :maxPrice)
          and (:minRating is null or p.averageRating >= :minRating)
        """)
    Page<Product> searchProducts(
        @Param("keyword") String keyword,
        @Param("categoryId") Long categoryId,
        @Param("minPrice") BigDecimal minPrice,
        @Param("maxPrice") BigDecimal maxPrice,
        @Param("minRating") BigDecimal minRating,
        Pageable pageable
    );
}
