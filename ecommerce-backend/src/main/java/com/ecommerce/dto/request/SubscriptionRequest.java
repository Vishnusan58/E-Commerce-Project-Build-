package com.ecommerce.dto.request;

import com.ecommerce.enums.PlanType;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SubscriptionRequest {
    @NotNull
    private PlanType planType;
}
