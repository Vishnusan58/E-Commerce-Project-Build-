package com.ecommerce.repository;

import com.ecommerce.entity.PremiumSubscription;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PremiumSubscriptionRepository extends JpaRepository<PremiumSubscription, Long> {
    Optional<PremiumSubscription> findByUserIdAndIsActiveTrue(Long userId);
}
