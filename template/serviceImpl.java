package ${basePackageName}.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;
import ${basePackageName}.dto.${entityName}Dto;
import ${basePackageName}.entity.${entityName};
import ${basePackageName}.mapper.${entityName}Mapper;
import ${basePackageName}.repository.${entityName}Repository;
import ${basePackageName}.service.${entityName}Service;

@Service
public class ${entityName}ServiceImpl implements ${entityName}Service {
	
	private final ${entityName}Repository ${entityNameLowerCase}Repository;
	private final ${entityName}Mapper ${entityNameLowerCase}Mapper;

	@Autowired
	public ${entityName}ServiceImpl(${entityName}Repository ${entityNameLowerCase}Repository, ${entityName}Mapper ${entityNameLowerCase}Mapper) {
		this.${entityNameLowerCase}Repository = ${entityNameLowerCase}Repository;
		this.${entityNameLowerCase}Mapper = ${entityNameLowerCase}Mapper;
	}

	@Override
	public List<${entityName}Dto> getList${entityName}s() {
		List<${entityName}> list${entityName}s = ${entityNameLowerCase}Repository.findAll();
		return ${entityNameLowerCase}Mapper.toListDtos(list${entityName}s);
	}

	@Override
	public ${entityName}Dto get${entityName}ById(Long id) {
		${entityName} entity = ${entityNameLowerCase}Repository.findById(id).orElseThrow(EntityNotFoundException::new);
		return ${entityNameLowerCase}Mapper.toDto(entity);
	}

	@Override
	public void create${entityName}(${entityName}Dto dto) {
		${entityName} ${entityNameLowerCase} = ${entityNameLowerCase}Mapper.to${entityName}(dto);
		${entityNameLowerCase}.setId(null);
		${entityNameLowerCase}Repository.save(${entityNameLowerCase});
	}
	
	@Override
	public void update${entityName}(${entityName}Dto dto) {
		${entityName} ${entityNameLowerCase} = ${entityNameLowerCase}Repository.findById(dto.getId()).orElseThrow(EntityNotFoundException::new);
		${entityNameLowerCase}Mapper.update${entityName}FromDto(dto, ${entityNameLowerCase});
		${entityNameLowerCase}Repository.save(${entityNameLowerCase});
	}

	@Override
	public void delete${entityName}ById(Long id) {
		${entityNameLowerCase}Repository.deleteById(id);
	}
}
