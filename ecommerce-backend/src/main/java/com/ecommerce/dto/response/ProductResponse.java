package com.ecommerce.dto.response;

import java.math.BigDecimal;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductResponse {
    private Long id;
    private String name;
    private String description;
    private BigDecimal price;
    private BigDecimal discountPercent;
    private int stockQuantity;
    private String imageUrl;
    private BigDecimal averageRating;
    private int totalReviews;
}
