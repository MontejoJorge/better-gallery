import { InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
	PanelRow,
	ToggleControl,
	RangeControl,
} from "@wordpress/components";
import type { BlockAttributes } from "../types";

interface InspectorProps {
	attributes: BlockAttributes;
	setAttributes: ( attrs: Partial<BlockAttributes> ) => void;
}

export default function Inspector( {
	attributes,
	setAttributes,
}: InspectorProps ): JSX.Element {
	return (
		<InspectorControls>
			<PanelBody title="Ajustes del bloque" initialOpen={ true }>
				<PanelRow>
					<ToggleControl
						label="Activar opción"
						checked={ attributes.enabled }
						onChange={ ( value: boolean ) =>
							setAttributes( { enabled: value } )
						}
					/>
				</PanelRow>

				<RangeControl
					label="Tamaño"
					value={ attributes.size }
					onChange={ ( value: number | undefined ) =>
						setAttributes( { size: value ?? 0 } )
					}
					min={ 0 }
					max={ 100 }
				/>
			</PanelBody>
		</InspectorControls>
	);
}
