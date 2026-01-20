package com.ecommerce.repository;

import com.ecommerce.entity.Order;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByUserIdOrderByOrderDateDesc(Long userId);

    @Query("""
        select o from Order o
        join o.items i
        where i.seller.id = :sellerId
        """)
    List<Order> findOrdersContainingSellerProducts(@Param("sellerId") Long sellerId);
}
