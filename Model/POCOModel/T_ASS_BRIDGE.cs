//------------------------------------------------------------------------------
// <auto-generated>
//    此代码是根据模板生成的。
//
//    手动更改此文件可能会导致应用程序中发生异常行为。
//    如果重新生成代码，则将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;

namespace Model
{
	public partial class T_ASS_BRIDGE
	{
		public T_ASS_BRIDGE ToPOCO(bool isPOCO = true){
			return new T_ASS_BRIDGE(){
				PKID = this.PKID,
				GWD_CODE = this.GWD_CODE,
				DEP_CODE = this.DEP_CODE,
				GQ_CODE = this.GQ_CODE,
				LINE_CODE = this.LINE_CODE,
				LINE_NAME = this.LINE_NAME,
				ASSIST_LINE_CODE = this.ASSIST_LINE_CODE,
				ASSIST_LINE_NAME = this.ASSIST_LINE_NAME,
				BRIDGE_CODE = this.BRIDGE_CODE,
				BRIDGE_NAME = this.BRIDGE_NAME,
				LINE_DIR = this.LINE_DIR,
				OPERATION_STATUS = this.OPERATION_STATUS,
				GAUGE = this.GAUGE,
				CENTER_MILEAGE = this.CENTER_MILEAGE,
				LONGCHAIN_MARKER = this.LONGCHAIN_MARKER,
				BRIDGE_LENGTH = this.BRIDGE_LENGTH,
				BRIDGEHOLE_LENGTH = this.BRIDGEHOLE_LENGTH,
				HOLE_TYPE = this.HOLE_TYPE,
				INTERCHANGE_TYPE = this.INTERCHANGE_TYPE,
				START_MILEAGE = this.START_MILEAGE,
				END_MILEAGE = this.END_MILEAGE,
			};
		}
	} 
}
