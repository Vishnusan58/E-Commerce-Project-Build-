package com.ecommerce.dto.response;

import com.ecommerce.enums.PlanType;
import java.time.Instant;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SubscriptionResponse {
    private Long id;
    private PlanType planType;
    private Instant startDate;
    private Instant endDate;
    private boolean active;
    private boolean autoRenew;
}
