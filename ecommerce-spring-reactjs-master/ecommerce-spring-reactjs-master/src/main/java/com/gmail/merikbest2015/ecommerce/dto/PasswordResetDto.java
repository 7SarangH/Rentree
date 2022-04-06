package com.gmail.merikbest2015.ecommerce.dto;

import lombok.Data;

@Data
public class PasswordResetDto {
    private String email;
    private String password;
    private String password2;
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPassword2() {
		return password2;
	}
	public void setPassword2(String password2) {
		this.password2 = password2;
	}
    
    
}
