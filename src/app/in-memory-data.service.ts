import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{
    createDb(){
        const rh = [
            {id: 1, nombres: 'Juan', primApe: 'Perez', segunApe: 'Ramirez', curp: 'PERJ930213HDFMSJ08', puesto: 'Desarrollador FrontEnd', depto: 'Sistemas', estado: 'Activo'},
            {id: 2, nombres: 'Pedro', primApe: 'Martinez', segunApe: 'Diaz', curp: 'MADP950331HTSMDE09', puesto: 'Desarrollador FrontEnd', depto: 'Sistemas', estado: 'Inactivo'},
            {id: 3, nombres: 'Sandra', primApe: 'Nieto', segunApe: 'Gutierrez', curp: 'NIGS972109MDFETR04', puesto: 'Desarrollador BackEnd', depto: 'Sistemas', estado: 'Activo'},
            {id: 4, nombres: 'Martin', primApe: 'González', segunApe: 'Hernández', curp: 'GOHM871224HGDUJN02', puesto: 'Desarrollador BackEnd', depto: 'Sistemas', estado: 'Activo'},
            {id: 5, nombres: 'Juan Carlos', primApe: 'Ponce', segunApe: 'Camargo', curp: 'POCJ890605HBCRTP01', puesto: 'Desarrollador FrontEnd', depto: 'Sistemas', estado: 'Suspendido'},
            {id: 6, nombres: 'Juan Carlos', primApe: 'Ponce', segunApe: 'Camargo', curp: 'POCJ890605HBCRTP01', puesto: 'Desarrollador FrontEnd', depto: 'Sistemas', estado: 'Suspendido'},
            {id: 7, nombres: 'Juan Carlos', primApe: 'Ponce', segunApe: 'Camargo', curp: 'POCJ890605HBCRTP01', puesto: 'Desarrollador FrontEnd', depto: 'Sistemas', estado: 'Suspendido'},
            {id: 8, nombres: 'Juan Carlos', primApe: 'Ponce', segunApe: 'Camargo', curp: 'POCJ890605HBCRTP01', puesto: 'Desarrollador FrontEnd', depto: 'Sistemas', estado: 'Suspendido'},
            {id: 9, nombres: 'Juan Carlos', primApe: 'Ponce', segunApe: 'Camargo', curp: 'POCJ890605HBCRTP01', puesto: 'Desarrollador FrontEnd', depto: 'Sistemas', estado: 'Suspendido'},
            {id: 10, nombres: 'Juan Carlos', primApe: 'Ponce', segunApe: 'Camargo', curp: 'POCJ890605HBCRTP01', puesto: 'Desarrollador FrontEnd', depto: 'Sistemas', estado: 'Suspendido'},
            {id: 11, nombres: 'Juan Carlos', primApe: 'Ponce', segunApe: 'Camargo', curp: 'POCJ890605HBCRTP01', puesto: 'Desarrollador FrontEnd', depto: 'Sistemas', estado: 'Suspendido'},
            {id: 12, nombres: 'Juan Carlos', primApe: 'Ponce', segunApe: 'Camargo', curp: 'POCJ890605HBCRTP01', puesto: 'Desarrollador FrontEnd', depto: 'Sistemas', estado: 'Suspendido'},
            {id: 13, nombres: 'Juan Carlos', primApe: 'Ponce', segunApe: 'Camargo', curp: 'POCJ890605HBCRTP01', puesto: 'Desarrollador FrontEnd', depto: 'Sistemas', estado: 'Suspendido'},
            {id: 14, nombres: 'Juan Carlos', primApe: 'Ponce', segunApe: 'Camargo', curp: 'POCJ890605HBCRTP01', puesto: 'Desarrollador FrontEnd', depto: 'Sistemas', estado: 'Suspendido'},
            {id: 15, nombres: 'Juan Carlos', primApe: 'Ponce', segunApe: 'Camargo', curp: 'POCJ890605HBCRTP01', puesto: 'Desarrollador FrontEnd', depto: 'Sistemas', estado: 'Suspendido'},
            {id: 16, nombres: 'Juan Carlos', primApe: 'Ponce', segunApe: 'Camargo', curp: 'POCJ890605HBCRTP01', puesto: 'Desarrollador FrontEnd', depto: 'Sistemas', estado: 'Suspendido'},
            {id: 17, nombres: 'Juan Carlos', primApe: 'Ponce', segunApe: 'Camargo', curp: 'POCJ890605HBCRTP01', puesto: 'Desarrollador FrontEnd', depto: 'Sistemas', estado: 'Suspendido'},
        ];
        return { rh };
    }
}