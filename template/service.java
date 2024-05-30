package ${basePackageName}.service;

import java.util.List;

import ${basePackageName}.dto.${entityName}Dto;

public interface ${entityName}Service {
	List<${entityName}Dto> getList${entityName}s();
	${entityName}Dto get${entityName}ById(Long id);
	void create${entityName}(${entityName}Dto dto);
	void update${entityName}(${entityName}Dto dto);
	void delete${entityName}ById(Long id);
}
