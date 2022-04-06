package com.gmail.merikbest2015.ecommerce.domain;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalDate;

/**
 * The class describes the "Review" entity.
 * The @Entity annotation says that objects of this class will be processed by hibernate.
 * The @Table (name = "review") annotation indicates to the "review" table in which the objects will be stored.
 * The @Data annotation generates getters and setters for all fields, toString method, and hashCode and equals implementations.
 * The @NoArgsConstructor annotation generates no-args constructor.
 *
 * @author Miroslav Khotinskiy (merikbest2015@gmail.com)
 * @version 1.0
 */
@Entity
@Table(name = "review")
@Data
@NoArgsConstructor
public class Review {
    /**
     * The unique code of the object.
     * The @Id annotation says that the field is the key for the current object.
     */
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    /**
     * Author of current perfume review
     */
    @NotBlank(message = "Fill in the input field")
    private String author;

    /**
     * Author message for current perfume review
     */
    @NotBlank(message = "Fill in the input field")
    private String message;

    /**
     * Date of perfume review
     */
    private LocalDate date;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}
    
    
    
}
