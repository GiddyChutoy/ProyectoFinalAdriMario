package com.ardkalic.controladores.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ardkalic.daos.UserDAO;
import com.ardkalic.dtos.UserDto;
import com.ardkalic.repositories.AuthorityRepository;
import com.ardkalic.repositories.UserRepository;

@RestController
@RequestMapping(value="/usuarios")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
public class UserControllerRest {
	
	@Autowired
	private UserRepository userRepo;
	@Autowired
	private AuthorityRepository authRepo;
	@Autowired
	private UserDAO userDao;
	
	@GetMapping(value="/")
	public List<UserDto> obtenerUsuarios(){
		return userRepo.obtenerUsuarios();
	}
	
	@PostMapping(value="/anadirUser")
	public ResponseEntity<String> anadirUsuario(@RequestBody UserDto user){
		userDao.anadirUser(user.getUsername(),user.getNombre(), user.getApellidos(), user.getUserPassword(), user.getEmail(), user.getDireccion(), user.getFecha_nacimiento(), user.getRol());
		return new ResponseEntity<>("Insercion Correcta", HttpStatus.OK);
	}
	@PutMapping(value="/modificarUser")
	public ResponseEntity<String> modificarUsuario(@RequestBody UserDto user){
		userDao.anadirUser(user.getUsername(),user.getNombre(), user.getApellidos(), user.getUserPassword(), user.getEmail(), user.getDireccion(), user.getFecha_nacimiento(), user.getRol());
		return new ResponseEntity<>("Insercion Correcta", HttpStatus.OK);
	}
	@DeleteMapping(value="/borrar")
	public ResponseEntity<String> borrarUsuario(@RequestParam(value = "username",required = false ) String username) {
		
		authRepo.borrarAuth(username);
		userRepo.borrarUsuario(username);
		return new ResponseEntity<>("Borrado Correcta", HttpStatus.OK);
		
	}
}
