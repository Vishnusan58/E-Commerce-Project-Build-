package com.ecommerce.repository;

import com.ecommerce.entity.Review;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByProductIdOrderByCreatedAtDesc(Long productId);

    @Query("""
        select avg(r.rating) from Review r
        where r.product.id = :productId
        """)
    Double calculateAverageRating(@Param("productId") Long productId);
}
