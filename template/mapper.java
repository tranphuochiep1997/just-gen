package ${basePackageName}.mapper;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;
import org.mapstruct.MappingTarget;

import ${basePackageName}.dto.${entityName}Dto;
import ${basePackageName}.entity.${entityName};

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface ${entityName}Mapper {
    ${entityName}Dto toDto(${entityName} ${entityNameLowerCase});
    ${entityName} to${entityName}(${entityName}Dto dto);
    List<${entityName}Dto> toListDtos(List<${entityName}> list${entityName}s);
    void update${entityName}FromDto(${entityName}Dto dto, @MappingTarget ${entityName} ${entityNameLowerCase});
}
