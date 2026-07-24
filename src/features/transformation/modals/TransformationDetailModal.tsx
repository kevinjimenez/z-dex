import { Transformation } from '@/core/interfaces/responses/character-response.interface';
import BaseButtonIcon from '@/shared/components/ui/BaseButtonIcon';
import BaseModal from '@/shared/components/ui/BaseModal';
import { View } from 'react-native';
import TransformationPoster from '../components/TransformationPoster';
import TransformationStat from '../components/TransformationStat';
import TransformationTitle from '../components/TransformationTitle';

interface TransformationDetailModalProps {
  selected: Transformation | null;
  onPress: () => void;
}

const TransformationDetailModal = ({
  selected,
  onPress,
}: TransformationDetailModalProps) => {
  return (
    <BaseModal size="half" visible={!!selected}>
      {selected && (
        <View className="w-full flex-col gap-y-4 relative">
          <TransformationPoster
            image={selected.image}
            contentPosition="top"
            width="100%"
            height={250}
          />
          <View className="px-5 gap-y-5">
            <TransformationTitle title={selected.name} />

            <TransformationStat ki={selected.ki} />
          </View>

          <BaseButtonIcon
            onPress={onPress}
            size={20}
            icon="x"
            color="text-white"
            className="absolute bg-black/50 top-4 right-4 size-10 items-center justify-center rounded-full"
          />
        </View>
      )}
    </BaseModal>
  );
};

export default TransformationDetailModal;
