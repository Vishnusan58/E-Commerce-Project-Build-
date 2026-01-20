package com.ecommerce.dto.response;

import java.time.Instant;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReviewResponse {
    private Long id;
    private Long productId;
    private Long userId;
    private int rating;
    private String comment;
    private boolean verifiedPurchase;
    private boolean approved;
    private Instant createdAt;
}
