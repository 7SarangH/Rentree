package com.gmail.merikbest2015.ecommerce.dto;

import lombok.Data;

import java.util.List;

@Data
public class PerfumeSearchFilterDto {
    List<Integer> prices;
    List<String> perfumers;
    List<String> genders;
    String perfumeGender;
    String perfumer;
	public List<Integer> getPrices() {
		return prices;
	}
	public void setPrices(List<Integer> prices) {
		this.prices = prices;
	}
	public List<String> getPerfumers() {
		return perfumers;
	}
	public void setPerfumers(List<String> perfumers) {
		this.perfumers = perfumers;
	}
	public List<String> getGenders() {
		return genders;
	}
	public void setGenders(List<String> genders) {
		this.genders = genders;
	}
	public String getPerfumeGender() {
		return perfumeGender;
	}
	public void setPerfumeGender(String perfumeGender) {
		this.perfumeGender = perfumeGender;
	}
	public String getPerfumer() {
		return perfumer;
	}
	public void setPerfumer(String perfumer) {
		this.perfumer = perfumer;
	}
    
    
}
