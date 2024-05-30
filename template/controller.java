package ${basePackageName}.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ${basePackageName}.dto.${entityName}Dto;
import ${basePackageName}.service.${entityName}Service;

@RestController
@RequestMapping("/${entityNameLowerCase}s")
public class ${entityName}Controller {
	
	private ${entityName}Service ${entityNameLowerCase}Service;

	@Autowired
	public ${entityName}Controller(${entityName}Service ${entityNameLowerCase}Service) {
		this.${entityNameLowerCase}Service = ${entityNameLowerCase}Service;
	}
	
	@GetMapping
	public ResponseEntity<List<${entityName}Dto>> getList${entityName}s() {
		List<${entityName}Dto> list${entityName}s = ${entityNameLowerCase}Service.getList${entityName}s();
		return ResponseEntity.ok(list${entityName}s);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<${entityName}Dto> get${entityName}ById(@PathVariable("id") Long id) {
		${entityName}Dto ${entityNameLowerCase} = ${entityNameLowerCase}Service.get${entityName}ById(id);
		return ResponseEntity.ok(${entityNameLowerCase});
	}
	
	@PostMapping
	public ResponseEntity<Void> create${entityName}(@RequestBody ${entityName}Dto ${entityNameLowerCase}Dto) {
		${entityNameLowerCase}Service.create${entityName}(${entityNameLowerCase}Dto);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}
	
	@PutMapping
	public ResponseEntity<Void> update${entityName}(@RequestBody ${entityName}Dto ${entityNameLowerCase}Dto) {
		${entityNameLowerCase}Service.update${entityName}(${entityNameLowerCase}Dto);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete${entityName}(@PathVariable("id") Long id) {
		${entityNameLowerCase}Service.delete${entityName}ById(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
