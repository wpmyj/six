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
	public partial class TURNOUT_PART
	{
		public TURNOUT_PART ToPOCO(bool isPOCO = true){
			return new TURNOUT_PART(){
				PART_ID = this.PART_ID,
				TURNOUT_ID = this.TURNOUT_ID,
				PART_NAME = this.PART_NAME,
				PART_DATE = this.PART_DATE,
				PART_UNIT = this.PART_UNIT,
				PART_FAC = this.PART_FAC,
				PART_CHARGER = this.PART_CHARGER,
				PART_NOTE = this.PART_NOTE,
				PART_MODEL = this.PART_MODEL,
			};
		}
	} 
}
